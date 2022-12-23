package com.Ezenweb.domain.entity.room;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Map;

@Repository
public interface RoomRepository extends JpaRepository<RoomEntity,Integer> {
    @Query(value = "select count(*) as 사진수 from room r , roomimg rimg where r.rno = rimg.rno;", nativeQuery = true )
    Map<String , Integer> findBySearch( );

}
