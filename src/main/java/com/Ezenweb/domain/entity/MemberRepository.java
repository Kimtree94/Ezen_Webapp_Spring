package com.Ezenweb.domain.entity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository // 해당 인터페이스가  Repository임을 명시
public interface MemberRepository extends JpaRepository<MemberEntity,Integer> {
                                    //   extends JpaRepository<매핑할클래스명,@ID필드의 자료형>
}
