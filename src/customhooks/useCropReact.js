import {useState} from 'react'

export const useCropReact = ()=>{
    const [image, setImage] = useState(null);
    const [crop, setCrop] = useState({ aspect: 1 / 1 })
    const [result, setResult] = useState(null);
    // Hace una vista previa de como se veria la imagen del sponsor en el banner
    const [preViewSponsor, setPreViewSponsor] = useState(null);
    
    const handleSendImg = async () =>{
        if(crop.width === 0){
            alert("Selecciona tu imagen y recortala")
        }else{
            const canvas = document.createElement("canvas");
            const scaleX = image.naturalWidth / image.width;
            const scaleY = image.naturalHeight / image.height;
            canvas.width = crop.width;
            canvas.height = crop.height;
            const ctx = canvas.getContext("2d");
          
            // New lines to be added
            const pixelRatio = window.devicePixelRatio;
            canvas.width = crop.width * pixelRatio;
            canvas.height = crop.height * pixelRatio;
            ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
            ctx.imageSmoothingQuality = "high";
            ctx.drawImage(
              image,
              crop.x * scaleX,
              crop.y * scaleY,
              crop.width * scaleX,
              crop.height * scaleY,
              0,
              0,
              crop.width,
              crop.height
            );

            const base64Image = canvas.toDataURL("image/jpeg");
            setPreViewSponsor(base64Image)
            setCrop({aspect:1})
            return new Promise(() => {
                canvas.toBlob(
                  (blob) => {
                      setResult(blob)
                  },
                  "image/jpeg",
                  1
                );
              });
        }
    }

    return {image,setImage,crop,setCrop,result,setResult,handleSendImg,preViewSponsor,setPreViewSponsor}
}