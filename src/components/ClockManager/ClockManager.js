const axios = require('axios');

export default {
  name: 'clock-manager',
  components: {},
  props: [],
  data () {
    return {
        Role:"",
        dataBack:"",
        dataUser:"",
        userDisplay:false,
        ClockState:'',
        ClockTime:''
    }
  },
  computed: {
  },
  mounted () {
    this.getClockTime();
      if(localStorage.Role) this.Role = localStorage.Role

    var self = this;

    //Get sur les Users
    axios({
        method: 'get',
        url: 'http://localhost:4000/api/users',
        headers: {
            'Authorization': 'Bearer ' + localStorage.AccessKey
        }
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
        },
        headers: {
            'Authorization': 'Bearer ' + localStorage.AccessKey
        }
    }).then(function(response) {
        response.data.data.forEach(function(element, index){
            response.data.data[index].username = "";
            axios.get("http://localhost:4000/api/users/"+element.user, {
                params : {
                    start : '',
                    end : ''
                },
                headers: {
                    'Authorization': 'Bearer ' + localStorage.AccessKey
                }
            })
            .then(function(rep) {
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
    },
    useClock: function(){
        var self = this;
        axios({
            method: 'get',
            url: 'http://localhost:4000/api/clocks/' + localStorage.IdUser,
            headers: {
                'Authorization': 'Bearer ' + localStorage.AccessKey
            }
        })
            .then(function (response) {
                if(response.data.data.length == 0 || response.data.data[0].status == false){
                    //START THE CLOCK
                    console.log("Start the clock")
                    return axios({
                        method: 'post',
                        url: 'http://localhost:4000/api/clocks/' + localStorage.IdUser,
                        data: {
                            clocking : {
                                time: new Date(),
                                status:true
                            }
                        },
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.AccessKey
                        }
                    }).then(function(response) {
                        self.ClockState = 1;
                    }).catch(function(error){
                        console.log(error);
                    });

                } else{
                    //STOP THE CLOCK
                    console.log("Stop the clock")
                    return axios({
                        method: 'post',
                        url: 'http://localhost:4000/api/clocks/' + localStorage.IdUser,
                        data: {
                            clocking : {
                                time: new Date(),
                                status:false
                            }
                        },
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.AccessKey
                        }
                    }).then(function(response) {
                        self.ClockState = 0;
                    }).catch(function(error){
                        console.log(error);
                    });
                }
            })
            .catch(function (error) {
                console.log(JSON.stringify(error, null, 2));
            });
    },

      getClockTime: function(){
        var self = this;
          axios({
              method: 'get',
              url: 'http://localhost:4000/api/clocks/' + localStorage.IdUser,
              headers: {
                  'Authorization': 'Bearer ' + localStorage.AccessKey
              }
          })
              .then(function (response) {
                  var status = response.data.data[0].status;
                  if(status == true){
                      self.ClockState = 1;
                      self.ClockTime = response.data.data[0].time;
                  } else{
                      self.ClockState = 0;
                  }
                  console.log(self.ClockState)
              })
              .catch(function (error) {
                  console.log(JSON.stringify(error, null, 2));
              });
      }
  }
}
