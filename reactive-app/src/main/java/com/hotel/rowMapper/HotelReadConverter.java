package com.hotel.rowMapper;

import com.hotel.model.City;
import com.hotel.model.Hotel;

import org.springframework.core.convert.converter.Converter;
import org.springframework.data.convert.ReadingConverter;

import io.r2dbc.spi.Row;

@ReadingConverter
public class HotelReadConverter implements Converter<Row, Hotel> {

    @Override
    public Hotel convert(Row source) {
        City city = City.builder()
                .setId(source.get("CITY_ID", Long.class))
                .setName(source.get("NAME", String.class))
                .setCityCentreLatitude(source.get("CITY_CENTRE_LATITUDE", Double.class))
                .setCityCentreLongitude(source.get("CITY_CENTRE_LONGITUDE", Double.class))
                .build();

        return Hotel.builder().setId(source.get("ID", Long.class))
                .setName(source.get("NAME", String.class))
                .setRating(source.get("RATING", Double.class))
                .setAddress(source.get("ADDRESS", String.class))
                .setCity(city)
                .setLatitude(source.get("LATITUDE", Double.class))
                .setLongitude(source.get("LONGITUDE", Double.class))
                .setDeleted(source.get("DELETED", Boolean.class))
                .build();

    }
}
