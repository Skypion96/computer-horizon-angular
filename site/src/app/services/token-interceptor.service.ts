import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req, next) {
    let tokenizedReq = req.clone({
      setHeaders:{
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21VdGlsaXNhdGV1ciI6IkphbnNzZW5zIiwicHJlbm9tVXRpbGlzYXRldXIiOiJNYXhpbWUiLCJtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJtZHAiOiJ0ZXN0IiwidGVsIjoiMDQ3MTM1NjU5NSIsInJ1ZSI6InJ1ZSIsIm51bVJ1ZSI6IjIwIiwiY3AiOjcwMDAsInZpbGxlIjoidGVzdCJ9.X4_3dEkUknNytkaSpfPPiosnB138fykSV9JDB6a9SVw'
      }
    })
    return next.handle(tokenizedReq)
  }
}
