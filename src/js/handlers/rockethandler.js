class RocketHandler{
    static index = 1;
static getRocketAsset(){
    if(this.index > 10) this.index = 1;
    let src = `../../assets/images/rocket${this.index}.png`;
    this.index++;
   return src;
}
}