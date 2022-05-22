package com.hotel.controller;

import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import com.hotel.model.Hotel;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.reactive.server.WebTestClient;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
@AutoConfigureMockMvc

class HotelControllerTest {
    @Autowired
    private WebTestClient webTestClient;

    @Test
    @DisplayName("When all hotels are requested then they are all returned")
    void allHotelsRequested() throws Exception {
        webTestClient.get().uri("/hotels").exchange().expectStatus().isOk()
                .expectBodyList(Hotel.class)
                .consumeWith(response -> {
                    List<Hotel> hotels = response.getResponseBody();
                    hotels.forEach(hotel -> {
                        assertTrue(hotel.getId() != null);
                    });
                });
    }

    @Test
    @DisplayName("When hotel by id is requested then hotel is returned")
    void fetchHotelCorrectly() throws Exception {

        webTestClient.get().uri("/hotels".concat("/{hotelId}"), "4")
                .exchange().expectStatus().isOk()
                .expectBody()
                .jsonPath("$.id", "4");

    }

    @Test
    @DisplayName("When hotel by invalid id is requested then return 404")
    void fetchHotelWhenHotelDoesNotExist() throws Exception {

        webTestClient.get().uri("/hotels".concat("/{hotelId}"), "400")
                .exchange().expectStatus().is4xxClientError();

    }

}
