package com.test.config

object TestConfiguration {

  val host: String = System.getProperty("host", "localhost")
  val port: String = System.getProperty("port", "8000")

  val targetRps: Int = Integer.getInteger("targetRps", 2000)
  val rampUpSeconds: Int = Integer.getInteger("rampUpSeconds", 1) // 1 mins
  val sustainLoadSeconds: Int = Integer.getInteger("sustainLoadSeconds", 180) // 10 mins

  val resourcesFolder: String = System.getProperty("resourcesFolder", "data")


}
