package com.hotel.controller;

import java.util.List;

import com.hotel.model.Hotel;
import com.hotel.service.HotelService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/hotels")
public class HotelController {
    private final HotelService hotelService;

    @Autowired
    public HotelController(HotelService hotelService) {
        this.hotelService = hotelService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public Flux<List<Hotel>> getAllHotels() {
        return hotelService.getAllHotels().buffer();
    }

    @GetMapping("/{hotelId}")
    public Mono<ResponseEntity> getHotelById(@PathVariable Long hotelId) {
        return hotelService.getHotelById(hotelId)
                .map(hotel -> ResponseEntity.status(HttpStatus.OK).body(hotel))
                .cast(ResponseEntity.class)
                .defaultIfEmpty(
                        ResponseEntity.status(HttpStatus.NOT_FOUND).body("No hotel found"));
    }

}
