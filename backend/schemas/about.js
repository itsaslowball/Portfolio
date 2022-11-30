export default{
    name:'abouts',
    title:'Abouts',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'school',
            title:'School',
            type:'string'
        },
        {
            name:'year',
            title:'Year',
            type:'string'
        },
        {
            name:'marks',
            title:'Marks',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}