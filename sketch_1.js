let angle = 0
function setup() { 
  createCanvas(windowWidth, windowHeight);
  background(0) //背景顏色為黑色
  angleMode(DEGREES) //設定使用到角度，採用數字的方式0~360，0~2PI則是用RADIANS
  frameRate(10) //改變執行速度為每秒10次
}

function draw() { //開始畫圖，每秒執行60次 //上面的frameRate(10)會變成每秒10次
  //background(220);
  background(0)
  //視窗的中心點畫一個600*600的方形，用白色的框線，不填滿顏色
  translate(width/2,height/2) //將設定的原點(0,0)從左上角，移到視窗的中心
  noFill() //不填滿顏色
  stroke("#ffffff") //設定線條框線為白色
  strokeWeight(3) //設定邊框寬度為3
  rectMode(CENTER) //設定方形的中心點為座標點，有此項不需在下一行各減去一半數值
  rotate(sin(angle)*25) //旋轉 //加上sin()之後會開始以0度開始往上跟往下反覆旋轉
  //三角函數sin的值介於-1~1之間，*25後則是-25~25
  

  // 繪製100個矩形
  for (let i = 0; i < 200; i++) {//i從0開始，執行不超過100次，每次i+1(i++就是指i+1)
    //let r =random(50,255) //抽一個亂數，亂數的值會藉於50(包含)~255(不包含)
    //let g =random(50,255) //抽一個亂數，亂數的值會藉於50(包含)~255(不包含)
    //let b =random(50,255) //抽一個亂數，亂數的值會藉於50(包含)~255(不包含)
    let r = map(sin(frameCount),-1,1,50,255) 
    //sin(frameCount)會在-1~1之間，會對應在(map)50~255的數字
    //例如sin(frameCount)=0時，大約會是對應在map(255-50)/2+50=152.5之間
    let g = map(sin(frameCount/2),-1,1,50,255)
    let b = map(sin(frameCount/5),-1,1,50,255)
    //如果RGB都是設定(sin(frameCount)，顏色就只會在黑白之間線性變換
    
    //rotate(sin(framecount+i)*100) //三角函數sin的值介於-1~1之間，*25後則是-25~25
    stroke(r,g,b)
    rotate(sin(angle-i*2)*5)
    rect(0, 0,600-i*3 ,600-i*3 ,100);
  }
  angle = angle+10
  //會呈現出圖案依照左上角選轉，一次旋轉10個角度，速度會過快

}