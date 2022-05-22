package com.hotel.service.impl;

import com.hotel.model.Hotel;
import com.hotel.repository.HotelRepository;
import com.hotel.service.HotelService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
class DefaultHotelService implements HotelService {
    private final HotelRepository hotelRepository;

    @Autowired
    DefaultHotelService(HotelRepository hotelRepository) {
        this.hotelRepository = hotelRepository;
    }

    @Override
    public Flux<Hotel> getAllHotels() {
        return hotelRepository.findAll();
    }

    @Override
    public Mono<Hotel> getHotelById(Long hotelId) {
        return hotelRepository.findById(hotelId);
    }

}
