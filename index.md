<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap" rel="stylesheet">
    <title>Document</title>

    <style>
        *{
            margin: 0;
            font-family: 'Quicksand';
        }
        #bg-movement{
            width: 100vw;
            height: 100vh;
            transition: 300ms all;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        h1{
            font-weight: bold;
            font-size: 70px;
            padding: 20px;
            color: #f2f2f2;
        }
        h1 span{
           color: #EEC643; 
        }
        .container{
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        #decN{
            border-radius: 12px;
            line-height: 28px;
            width: 400px;
            background-color: rgba(255,255,255,0.2);
            border: 3px solid #fff;
            padding: 12px;
            color: #fff;
            font-size: 20px;
            font-weight: 300;
            outline: none;
            margin: 10px;
        }
        #convert{
            padding: 12px;
            line-height: 28px;
            background-color: rgba(255,255,255,0.0);
            border: 3px solid #fff;
            border-radius: 12px;
            margin: 10px;
            color: #fff;
            font-weight: bold;
            font-size: 20px;
            cursor: pointer;
        }
        #result{
            margin-top: 100px;
            font-size: 28px;
            color: #fff;
            border: 2px solid #fff;
            padding: 8px;
        }
        @media (max-width: 1080px) {
            h1{
                max-width: 90vw;
                text-align: center;
                font-size: 55px;
            }
        }
        @media (max-width: 720px) {
            .container{
                flex-direction: column;
            }
            #decN{
                width: 70vw;
                font-size: 16px;
                line-height: 20px;
            }
            #result{
                max-width: 75vw;
                overflow: hidden;
                max-height: 150px;
                font-size: 14px;
            }
        }

    </style>
</head>
<body>
    <section id="bg-movement">
        <h1>Convierte de Decimal a <span>Binario</span> </h1>
        <p class="container">
            <input type="number" id="decN" placeholder="Ingrese el número Decimal">
            <input type="button" id="convert" value="CONVERTIR A BINARIO">
        </p>
        <p id="result"></p>
    </section>

    <script src="binary.js"></script>
    <script src="bg-movement.js"></script>
</body>
</html>