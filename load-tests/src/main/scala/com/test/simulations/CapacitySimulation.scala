package com.test.simulations

import ch.qos.logback.classic.{Level, LoggerContext}
import com.test.config.TestConfiguration._
import com.test.scenarios.{HotelScenarios}
import io.gatling.core.Predef._
import io.gatling.core.structure.{PopulationBuilder, ScenarioBuilder}
import io.gatling.http.Predef._
import org.slf4j.LoggerFactory

import scala.concurrent.duration.DurationInt
import scala.language.postfixOps

class CapacitySimulation extends Simulation {

  // FIXME: move this to config file
  val context: LoggerContext =
    LoggerFactory.getILoggerFactory.asInstanceOf[LoggerContext]
  context.getLogger("io.gatling.http").setLevel(Level.WARN)
  context.getLogger("io.gatling.core").setLevel(Level.WARN)

  private val baseHttpProtocol = http
    .baseUrl(s"http://$host:$port")
    .shareConnections

  // Read Operation RPS
  private val getHotelRps: Double = targetRps * 40.0 / 100
  private val listHotelsRps: Double = targetRps * 60.0 / 100

  setUp(
    HotelScenarios.getHotel().rampUpTo(getHotelRps),
    HotelScenarios.listHotels().rampUpTo(listHotelsRps)
  )

  implicit private class ScenarioToPopulation(scenario: ScenarioBuilder) {
    def rampUpTo(targetRps: Double): PopulationBuilder = {
      // generate an open workload injection profile
      // with levels of 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000 arriving users per second
      // each level lasting 10 seconds
      // separated by linear ramps lasting 10 seconds
      scenario
        .inject(
          incrementConcurrentUsers(200)
            .times(sustainLoadSeconds / 10)
            .eachLevelLasting(10)
            .separatedByRampsLasting(10)
            .startingFrom(200)
        )
        .protocols(baseHttpProtocol)
    }
  }

}
