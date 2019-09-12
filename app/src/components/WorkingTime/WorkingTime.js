import axios from 'axios'

export default {
  name: 'working-time',
  components: {},
  props: [],
  data () {
    return {
      userID : this.$route.params.userID,
      dataBack : '',
    }
  },
  computed: {

  },
  mounted () {
    var self = this;

    axios.get("http://localhost:4000/api/workingtimes/"+this.$route.params.userID, {
                params : {
                  start : '',
                  end : ''
                }
              })
              .then(function(response) {
                console.log(JSON.stringify(response, null, 2));
                self.dataBack = response.data.data;
              })
              .catch(function (error) {  
                console.log(JSON.stringify(error, null, 2));
              });
  },
  methods: {
    createWorkingTime: function() {
      this.$router.push("/working-time/" + this.userID + "/create");
    },

    updateWorkingTime() {

    },

    deleteWorkingTime: function(element) {
      axios.delete("http://localhost:4000/api/workingtimes/"+element)
                .then(function(response) {
                  // Refresh the page
                  document.location.reload(true);
                })
                .catch(function (error) {
                  console.log(JSON.stringify(error, null, 2));
                });      
    }
  }
}
