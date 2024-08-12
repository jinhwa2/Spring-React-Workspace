package com.kh.dto;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor //기본생성자
@AllArgsConstructor //필수생성자
public class User {
   private String id;
   private String email;
   private String name;
   private String password;
   private String profileImage;
}
