new Vue({
  el: '#tasks',
  data: {
    tasks: [{
      body: "Go to store",
      completed: false
    }],
    newTask: ''
  },

  methods: {
    addTask: function(e){
      e.preventDefault();

    if(this.newTask === ''){
      console.log("Please enter a task!");
    }else{
      this.tasks.push({
        body: this.newTask,
        completed:false
      });

      this.newTask = '';
      }
    },

    removeTask: function(task){
        this.tasks.$remove(task);


    }
  }
});
