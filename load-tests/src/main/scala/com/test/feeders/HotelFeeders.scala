package com.test.feeders

import io.gatling.core.Predef._
import io.gatling.core.feeder.{FeederBuilderBase}
import io.gatling.jdbc.Predef._

object HotelFeeders {

  def getHotelId(): FeederBuilderBase[String] = {
    Array(
      Map("id" -> "1"),
      Map("id" -> "2"),
      Map("id" -> "3"),
      Map("id" -> "4"),
      Map("id" -> "5"),
      Map("id" -> "6"),
      Map("id" -> "7"),
      Map("id" -> "8"),
      Map("id" -> "9"),
      Map("id" -> "10")
    ).random

  }

}
