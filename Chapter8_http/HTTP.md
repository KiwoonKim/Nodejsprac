      -> request ->
client              server
      <- reponse <-

    - HTTPS : TLS/SSL로 더 안전하게 데이터 전송

    - 처음 연결시 TCP connetion 생성.

"Status Codes.
    1. 1xx
        -> Information
        100 Continue
        102 Processing
    2. 2xx
        -> Succsessful
        200 OK
        201 Created
        204 No Content
    3. 3xx
        -> Redirection
        301 Moved PErmanently
        302 Found
        303 See Other (get 요청에 응답)
        307 Temporary Redirect 
        308 Permanent Redirect
    4. 4xx
        -> Client error
        400 Bad Request
        401 Unauthorized
        403 Forbidden
        404 Not Found
        405 Method Not Allowed
        409 Conflict
    5. 5xx
        -> Server error
        500 Internal Server Error
        502 Bad Gateway
        503 Service unavailable

"URL & Method.
    - protocol//hostname:portnum/path?query

    Request Methods
    GET / POST / PUT / DELETE / PATCH / HEAD / OPTIONS / TRACE
    1. GET : get. 200. 204. 403. 404. 405. -> 서버의 데이터를 변경하지 않음
    2. POST : create. 201. 401. 403. 404. 409. -> 서버의 데이터를 변경하는 요청
    3. PUT : replace. -> 서버의 데이터를 변경하는 요청
    4. DELETE : delete. -> 서버의 데이터를 변경하는 요청
    5. PATCH : replace partially. -> 서버의 데이터를 변경하는 요청
    6. HEAD : get without body. 200 -> 서버의 데이터를 변경하지 않음
    7. OPTIONS : all supported methods for URL. -> 서버의 데이터를 변경하지 않음
    8. TRACE : echoes the received reques. -> 서버의 데이터를 변경하지 않음
* Idempotent : 번) 멱등의, 멱등원. : 항상 동일한 상태로 서버를 유지할 수 있는가?

"HTTP
1. statless protocol.
    -> 한가지 요청에는 상태가 없음. 즉 개별 요청은 온전한 데이터를 가지고 있어야만 하고 분리되어 있다.
2. Sessions & Cookies.
    -> 헤더에 
3. Headers( Standard + Custom )
    -> Standard : Authorization.
        - User-agent.
        - Authorization.
        - Content-length. ( bytes )
        - Content-type. ( text/html, application/json )
        - Content-language. ( en )
        - Cache-control
    -> Custom : domain-key, domain.key