
var array = [ 'Volkswagen', 'BMW', 'Audi', 'Isuzu', 'Lamborghini', 'Ferrari', 'Mercides','Ford','Toyota','Kia','Mercedes','ShowAll']
function MyFn(Me) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] != Me.className && Me.className != 'ShowAll') {
        $("[id="+array[i]+"]").hide();
      }
      else {
        $("[id="+array[i]+"]").show();
      }
    }
}


