


let base = {
    data(){
        return {
            condition:{
        
            },
            list:[],
            total:0,
            size:10,
            current:1
        }
    },
    methods:{
        getList(){

        },
        queryClick(num){
            this.current = num
            this.getList()
        },
        sizeChange(size){
            this.size = size
            this.current = 1
            this.getList()
        },
        alert(){
            this.$message("adsf")
        }
    }
    
}
export { base}