export default {
  name: 'clock-manager',
  components: {},
  props: [],
  data () {
    return {
      dataBack:"",
      dataUser:"",
      userDisplay:false
    }
  },
  computed: {

  },
  mounted () {
    const axios = require('axios');

    var self = this;

    //Get sur les Users
    axios({
      method: 'get',
      url: 'http://localhost:4000/api/users'
    })
    .then(function (response) {
      self.dataUser = response.data.data;
    })
    .catch(function (error) {
      console.log(JSON.stringify(error, null, 2));
    });

    //Get sur les working times
    axios.get("http://localhost:4000/api/clocks", {
      params : {
        start : '',
        end : ''
      }
    }).then(function(response) {
        console.log(response)
        response.data.data.forEach(function(element, index){
            response.data.data[index].username = "";
            axios.get("http://localhost:4000/api/users/"+element.user, {
                params : {
                    start : '',
                    end : ''
                }
            })
            .then(function(rep) {
                console.log(rep)
                response.data.data[index].username = rep.data.data.username;
            })
            .catch(function (error) {
                console.log(JSON.stringify(error, null, 2));
            });
        })
        self.dataBack = response.data.data;


    }).catch(function (error) {
          console.log(JSON.stringify(error, null, 2));
    });

  },
  methods: {
    redirectWorkingTime: function(index){
      this.$router.push('/clock-manager/' + index)
    },
    displayUsers: function(){
        this.userDisplay = true;
    }
  }
}
