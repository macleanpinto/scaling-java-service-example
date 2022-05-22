package com.hotel.service;

import com.hotel.model.Hotel;

import java.util.List;
import java.util.Optional;

public interface HotelService {
    List<Hotel> getAllHotels();

    List<Hotel> getHotelsByCity(Long cityId);

    Optional<Hotel> getHotelById(Long hotelId);

    void deleteById(Long id);

    Hotel createNewHotel(Hotel hotel);
}
