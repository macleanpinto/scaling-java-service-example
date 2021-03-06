package com.hotel.controller;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hotel.model.Hotel;
import com.hotel.repository.HotelRepository;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
@AutoConfigureMockMvc
@Sql(executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD, scripts = "classpath:data.sql")

class HotelControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper mapper;

    @Autowired
    private HotelRepository repository;

    @Test
    @DisplayName("When all hotels are requested then they are all returned")
    void allHotelsRequested() throws Exception {
        mockMvc
                .perform(get("/hotels"))
                .andExpect(status().is2xxSuccessful())
                .andExpect(jsonPath("$", hasSize((int) repository.count())));
    }

    @Test
    @DisplayName("When hotel by id is requested then hotel is returned")
    void fetchHotelCorrectly() throws Exception {
        Hotel hotel = mapper.readValue(mockMvc
                .perform(get("/hotels/4"))
                .andExpect(status().is2xxSuccessful())
                .andReturn()
                .getResponse()
                .getContentAsString(), Hotel.class);

        assertThat(hotel.getId(), equalTo(4L));
    }

    @Test
    @DisplayName("When hotel by invalid id is requested then return 404")
    void fetchHotelWhenHotelDoesNotExist() throws Exception {
        mockMvc
                .perform(get("/hotel/400"))
                .andExpect(status().is4xxClientError());
    }

}
