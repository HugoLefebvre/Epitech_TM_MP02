import axios from 'axios'

export default {
  name: 'working-time-create',
  components: {},
  props: [],
  data () {
    return {
      userID : this.$route.params.userID,
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: ''
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    // At the submission of the form
    submit: function() {
      // Synchronize methods : do first then do the second
      this.createWorkingTime().then(this.redirection);
    },

    createWorkingTime: function() {
      // Must return to authorize then clause
      return axios({ 
        method: 'post',
        url: 'http://localhost:4000/api/workingtimes/' + this.userID,
        data: {
          working_time : {
            start: this.startDate + ' ' + this.startTime + ':00',
            end: this.endDate + ' ' + this.endTime + ':00'
          }
        }
      }).then(function(response) {
        console.log(response);
      }).catch(function(error){
        console.log(error);
      });
    },

    // Return to the list of working-time of the user
    redirection(){
      this.$router.push({
        path: `/working-time/${this.userID}`
      });
    }
  }
}