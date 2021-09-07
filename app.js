const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000
const fs = require('fs')
const path = require('path');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/svg/:firstName/:lastName/:color?/:type?', (req, res) => {

    const animation = `.text{
        font-family: 'Russo One', sans-serif;
        text-transform: uppercase;
        animation: stroke 5s infinite alternate;
        stroke-width: 2;
        stroke: rgba(STROKE_COLOR,1);
        font-size: 140px;
        width: 100%; height: 100%;
        position: absolute;
        }
  
  @keyframes stroke {
      0% {
          fill: rgba(FILL_COLOR,0); stroke: rgba(STROKE_COLOR,1);
          stroke-dashoffset: 25%; stroke-dasharray: 0 50%; stroke-width: 2;
      }
      70% {fill: rgba(FILL_COLOR,0); stroke: rgba(STROKE_COLOR,1); }
      80% {fill: rgba(FILL_COLOR,0); stroke: rgba(STROKE_COLOR,1); stroke-width: 3; }
      100% {
          fill: rgba(FILL_COLOR,1); stroke: rgba(STROKE_COLOR,0); 
          stroke-dashoffset: -25%; stroke-dasharray: 50% 0; stroke-width: 0;
      }
        }`
    const strokeOnly = `.text{
        font-family: 'Russo One', sans-serif;
        text-transform: uppercase;
        fill:none;
        stroke-width: 2;
        stroke: rgba(FILL_COLOR,1);
        font-size: 140px;
        width: 100%; height: 100%;
        position: absolute;
        }`
    const fillOnly = `.text{
        font-family: 'Russo One', sans-serif;
        text-transform: uppercase;
        fill:rgba(FILL_COLOR,1);
        font-size: 140px;
        width: 100%; height: 100%;
        position: absolute;
        }`
    var STYLE_INFO = ""
        
      var fill_color = "72,138,204"
      var stroke_color = "54,95,160"

      const options = {
        root: path.join(__dirname)
      };

      if(req.params.type){
            if(req.params.type.toUpperCase()=="ANIMATE"){
                STYLE_INFO = animation
            }else if(req.params.type.toUpperCase()=="STROKE"){
                STYLE_INFO = strokeOnly
            }else if(req.params.type.toUpperCase()=="FILL"){
                STYLE_INFO = fillOnly
        }
        }else{
        STYLE_INFO = fillOnly
        }

      function hexToRgb(hex) {
          var r = parseInt(hex[0]+hex[1], 16);
          var g = parseInt(hex[2]+hex[3], 16);
          var b = parseInt(hex[4]+hex[5], 16);

          var rl = r/1.3
          var gl = g/1.3
          var bl = b/1.3
          if(rl<0){
              rl=0
          }else if(gl<0){
              gl=0
          }else if(bl<0){
              bl=0
          }
          const lightcolor = `${r},${g},${b}`;
          const darkcolor = `${rl},${gl},${bl}`;
        return {
            lightColor : lightcolor,
            darkColor : darkcolor
         }
          
      }

      if(req.params.color){
        fill_color = hexToRgb(req.params.color).lightColor
        stroke_color = hexToRgb(req.params.color).darkColor
      }



    function initials(firstLetter, secondLetter){
        const a = firstLetter[0];
        const b = secondLetter[0];
        const initials = a + b;
        return initials.toUpperCase();
    }
    
    function fileEdit(name){
        const data = fs.readFileSync('index.svg','utf8');
        const newData = data.replace(/STYLE_INFO/g,STYLE_INFO)
                            .replace(/PLACEHOLDER/g,name)
                            .replace(/FILL_COLOR/g,fill_color)
                            .replace(/STROKE_COLOR/g,stroke_color);


        return(newData)
    }

    const { firstName, lastName } = req.params;
    const name = initials(firstName, lastName);
    const response = fileEdit(name);

    const fileName =name+".svg"

    fs.writeFile(fileName,response,(err)=>{
        if(err){
            console.log(err)
        }else{
            res.sendFile(fileName, options, function(err){
                if(err){
                    console.log(err)
                }else{
                    console.log(`sent file ${fileName}`)
                    fs.unlink(fileName,function(err){
                        if(err){
                            return console.log(err);
                        } 
                        console.log(`${fileName} deleted successfully`);
                   });
                   res.send().status(200)
                }
            })
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})