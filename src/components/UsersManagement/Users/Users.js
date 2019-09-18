import axios from 'axios'

export default {
  name: 'users',
  components: {},
  props: [],
  data () {
    return {
      dataBack : '',
    }
  },
  computed: {

  },
  mounted () {
    var self = this;

    axios({
      method: 'get',
      url: 'http://localhost:4000/api/users'
    })
    .then(function (response) {
      console.log(JSON.stringify(response, null, 2));
      self.dataBack = response.data.data;
    })
    .catch(function (error) {
      console.log(JSON.stringify(error, null, 2));
    });
  },
  methods: {
    createUser: function() {
      this.$router.push({
        name: 'create-user'
      });
    },

    editUser: function(id) {
      this.$router.push({
        path: `/user/edit-user/${id}`
      })
    },

    deleteUser: function(id) {
      axios({
        method: 'delete',
        url: 'http://localhost:4000/api/users/' + id
      })
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
