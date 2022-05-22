package com.hotel.service;

import com.hotel.model.Hotel;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface HotelService {
    Flux<Hotel> getAllHotels();

    Mono<Hotel> getHotelById(Long hotelId);

}
