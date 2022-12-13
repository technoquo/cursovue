import axios from 'axios'


const uploadImage = async ( file ) => {
  
    if ( !file ) return

    try {
        
        var formData = new FormData();
        
        formData.append('upload_preset','curso-vue')
        formData.append('file', file )

        // for (var key of form_data.entries()) {
        //     console.log(key[0] + ', ' + key[1]);
        // }

     
       

        const { data } = await axios.post('https://api.cloudinary.com/v1_1/acceso-visual/image/upload',formData)
        console.log(data)
     

        return data.secure_url

    } catch (error) {
      
        console.error('Error al cargar la imagen, revisar logs')
        console.log(error)
        return null
    }


}

export default uploadImage