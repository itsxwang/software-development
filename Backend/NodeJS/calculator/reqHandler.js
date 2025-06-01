function requestHandler(req, res) {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`
            <html>
                <head>
                    <title>Welcome</title>
                    <style>
                        body {
                            background: linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%);
                            font-family: 'Segoe UI', sans-serif;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            height: 100vh;
                            margin: 0;
                        }
                        .container {
                            background: rgba(255,255,255,0.85);
                            padding: 40px 60px;
                            border-radius: 16px;
                            box-shadow: 0 4px 24px rgba(0,0,0,0.08);
                            text-align: center;
                        }
                        h1 {
                            color: #333;
                            margin-bottom: 12px;
                        }
                        a {
                            color: #3498db;
                            text-decoration: none;
                            font-weight: bold;
                            font-size: 18px;
                            position: relative;
                        }
                        a::after {
                            content: "";
                            position: absolute;
                            left: 0;
                            bottom: -2px;
                            width: 0;
                            height: 2px;
                            background-color: #3498db;
                            transition: width 0.3s ease;
                        }
                        a:hover::after {
                            width: 100%;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h1>Hello World</h1>
                        <p>Welcome to the Calculator App!</p>
                        <a href="/calculator">Go to Calculator</a>
                    </div>
                </body>
            </html>
        `);
        return res.end();
    }

    else if (req.url === '/calculator') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`
            <html>
                <head>
                    <title>Calculator</title>
                    <style>
                        body {
                            background: linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%);
                            font-family: 'Segoe UI', sans-serif;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            height: 100vh;
                            margin: 0;
                        }
                        .calc-container {
                            background: rgba(255,255,255,0.95);
                            padding: 40px 60px;
                            border-radius: 16px;
                            box-shadow: 0 4px 24px rgba(0,0,0,0.08);
                            text-align: center;
                        }
                        h2 {
                            color: #333;
                            margin-bottom: 24px;
                        }
                        input[type="number"] {
                            width: 196px;
                            padding: 10px;
                            margin: 10px 0;
                            border: 1px solid #b2bec3;
                            border-radius: 8px;
                            font-size: 16px;
                            outline: none;
                            transition: border 0.2s;
                        }
                        input[type="number"]:focus {
                            border: 1.5px solid #3498db;
                        }
                        button {
                            background: #3498db;
                            color: #fff;
                            border: none;
                            border-radius: 8px;
                            padding: 12px 32px;
                            font-size: 16px;
                            cursor: pointer;
                            margin-top: 16px;
                            transition: background 0.2s;
                        }
                        button:hover {
                            background: #217dbb;
                        }
                        a {
                            display: block;
                            margin-top: 20px;
                            color: #3498db;
                            text-decoration: none;
                            font-size: 16px;
                            position: relative;
                        }
                        a::after {
                            content: "";
                            position: absolute;
                            left: 0;
                            bottom: -2px;
                            width: 0;
                            height: 2px;
                            background-color: #3498db;
                            transition: width 0.3s ease;
                        }
                        a:hover::after {
                            width: 100%;
                        }
                    </style>
                </head>
                <body>
                    <div class="calc-container">
                        <h2>Simple Calculator</h2>
                        <form action="/calculate-result" method="POST">
                            <input type="number" name="num1" placeholder="Enter first number" required>
                            <br>
                            <input type="number" name="num2" placeholder="Enter second number" required>
                            <br>
                            <button type="submit">Calculate Sum</button>
                        </form>
                        
                        <a href="/">Back to Home</a>
                    </div>
                </body>
            </html>
        `);
        return res.end();
    }

    if (req.url === '/calculate-result' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const params = new URLSearchParams(body);
            const num1 = parseInt(params.get('num1'));
            const num2 = parseInt(params.get('num2'));
            const result = num1 + num2;
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(`
                <html>
                    <head>
                        <title>Result</title>
                        <style>
                            body {
                                background: linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%);
                                font-family: 'Segoe UI', sans-serif;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                justify-content: center;
                                height: 100vh;
                                margin: 0;
                            }
                            .result-container {
                                background: rgba(255,255,255,0.95);
                                padding: 40px 60px;
                                border-radius: 16px;
                                box-shadow: 0 4px 24px rgba(0,0,0,0.08);
                                text-align: center;
                            }
                            h2 {
                                color: #333;
                                margin-bottom: 24px;
                            }
                            .result {
                                font-size: 22px;
                                color: #27ae60;
                                margin-bottom: 20px;
                            }
                            a {
                                color: #3498db;
                                text-decoration: none;
                                font-size: 16px;
                                position: relative;
                            }
                            a::after {
                                content: "";
                                position: absolute;
                                left: 0;
                                bottom: -2px;
                                width: 0;
                                height: 2px;
                                background-color: #3498db;
                                transition: width 0.3s ease;
                            }
                            a:hover::after {
                                width: 100%;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="result-container">
                            <h2>Calculation Result</h2>
                            <div class="result">The sum of ${num1} and ${num2} is: <strong>${result}</strong></div>
                            <a href="/calculator">Try Again</a>
                            <br>
                            <a href="/">Back to Home</a>
                        </div>
                    </body>
                </html>
            `);
            return res.end();
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(`
            <html>
                <head>
                    <title>404 Not Found</title>
                    <style>
                        body {
                            background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
                            font-family: 'Segoe UI', sans-serif;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            height: 100vh;
                            margin: 0;
                        }
                        .notfound-container {
                            background: rgba(255,255,255,0.95);
                            padding: 40px 60px;
                            border-radius: 16px;
                            box-shadow: 0 4px 24px rgba(0,0,0,0.08);
                            text-align: center;
                        }
                        h1 {
                            color: #e74c3c;
                            margin-bottom: 16px;
                        }
                        p {
                            color: #555;
                            margin-bottom: 20px;
                        }
                        a {
                            color: #3498db;
                            text-decoration: none;
                            font-size: 16px;
                            position: relative;
                        }
                        a::after {
                            content: "";
                            position: absolute;
                            left: 0;
                            bottom: -2px;
                            width: 0;
                            height: 2px;
                            background-color: #3498db;
                            transition: width 0.3s ease;
                        }
                        a:hover::after {
                            width: 100%;
                        }
                    </style>
                </head>
                <body>
                    <div class="notfound-container">
                        <h1>404</h1>
                        <p>Sorry, the page you are looking for does not exist.</p>
                        <a href="/">Back to Home</a>
                    </div>
                </body>
            </html>
        `);
        return res.end();
    }
}

module.exports = requestHandler;
