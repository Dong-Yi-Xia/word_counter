# Word Counter App

1. Character Count
2. Word Count
3. Sentence Count
4. Paragraph Count
5. Bigrams (counts of unique pairs of words)

![alt text](src/assets/images/count.png)

# SetUp



# Dependencies
BootStrap
- https://react-bootstrap.github.io/getting-started/introduction

Scss
- https://www.npmjs.com/package/node-sass

TTS
- https://www.npmjs.com/package/speak-tts



## Extra Way with the Voice RSS API
- http://www.voicerss.org/api/
- https://www.w3schools.com/tags/ref_av_dom.asp


Another way on using TTS with the 
```
<audio className="music">
    <source src="http://api.voicerss.org/?key=1234567890QWERTY&hl=en-us&src=Hello, world!"></source>
</audio>
<button onClick={(e)=>{
        const music = document.querySelector('.music')
        music.play()
    }}>
Listen</button>
```