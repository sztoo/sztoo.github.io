<template>
  <div class="resume__technicalskills">
    <div class="resume__section_title resume__technicalskills_title">&sect; {{ title }} </div>
    <div class="resume__content resume__to_space"> 
      <div v-for="(i, idx) in skills" :key="idx">
        <div class="resume__technicalskills_content">
          <span><b>{{ i.type }}</b>: </span>
          <span v-for="(m,idx) in i.list" :key="idx">
            <template v-if="idx===i.list.length-1">{{ m }}</template>
            <template v-else>{{ m }}, </template>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Technical Skills',
      skills: [
        {
          type: 'Programming',
          list: [
            'Python', 'C', 'Javascript (Vue.js)', 'Java', 'R', 
            'Apache Spark (PySpark)', 'HTML', 'CSS', 'SQL'
          ]
        },
        {
          type: 'Technologies & Tools',
          list: [
            'Microsoft Azure', 'Hive', 'Impala', 'Power BI', 'Node',
            'Git', 'Linux', 'Spark', 'Orange', 'JMP 13', 'Splunk Enterprise',
            'Wireshark'
          ]
        },
        {
          type: 'Design & Prototyping',
          list: [
            'Adobe Suite (Illustrator, Photoshop, InDesign', 'Sketch'
          ]
        }
      ],
    }
  }
  
}
</script>