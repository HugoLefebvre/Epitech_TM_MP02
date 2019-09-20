import axios from 'axios'

export default {
  name: 'connexion',
  components: {},
  props: [],
  data () {
    return {
        email:'',
        password:'',
        error_conn:''
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
        this.ConnectUser().then(this.redirection);
      },

      ConnectUser: function() {
        // Must return to authorize then clause
        var self = this;
        return axios({
          method: 'post',
          url: 'http://localhost:4000/api/users/sign_in',
          data: {
                  email : this.email,
                  password : this.password
          }
        }).then(function(response) {
            self.error_conn = ""
        }).catch(function(error){
            self.error_conn = "Connexion failed"
            console.log(error);
        });
      },

      // Return to the list of working-time of the user
      redirection(){
        /*this.$router.push({
          path: `/user`
      });*/
      }
  }
}
