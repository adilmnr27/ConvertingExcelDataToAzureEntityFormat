const list = [];
var canonicalForm = "";
class Schema{

    constructor(canonicalForm){
        this.canonicalForm=canonicalForm;
        this.list=list;
    }

    getObj(){
         var jsonObj = {
            canonicalForm : this.canonicalForm,
            list : this.list

        }
        return jsonObj;
    }


}

module.exports.Schema = Schema;