```mermaid
                sequenceDiagram
                        actor Browser
                        actor Server
                        Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
                        Server->>Browser: Response 200 text/html HTML page
                        
                        Browser->>Server: GET /Main.css
                        Server->>Browser: Respond with text/css file
                        Browser->>Server: GET /Main.jS
                        Server->>Browser: Respond with text/JS file
                        Browser->>Server: Get https://studies.cs.helsinki.fi/exampleapp/data.json
                        Server->>Browser: Respond json
```