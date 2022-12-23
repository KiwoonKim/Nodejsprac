const http = requlire('http');

http.createServer((req, res) => {
    res.write('<h1> Hellow world. <h1>')
    res.write('<p>Hello server</p>')
    res.end('')
})