package com.hotel.repository;

import com.hotel.model.Hotel;

import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Repository
public interface HotelRepository extends ReactiveCrudRepository<Hotel, Long> {
    @Query("select * from hotel join city where hotel.city_id = city.id")
    public Flux<Hotel> findAll();

    @Query("select * from hotel join city where hotel.city_id = city.id and hotel.id=:id")
    public Mono<Hotel> findById(@Param("id") Long id);
}
