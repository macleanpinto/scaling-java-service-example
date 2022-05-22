package com.hotel.service;

import com.hotel.model.Hotel;

import java.util.List;
import java.util.Optional;

public interface HotelService {
    List<Hotel> getAllHotels();

    Optional<Hotel> getHotelById(Long hotelId);
}
