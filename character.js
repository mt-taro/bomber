// 自機
function Character(){
    this.position = new Point();
    this.size = 0;
}
// サイズ初期化
Character.prototype.init = function(size){
    this.size = size;
};
