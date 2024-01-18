import React, { useState,useEffect} from 'react'
import Navbar from './Navbar';


function Dashboard() {
    const [items, setItems] = useState([]);
   
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
            setItems(items);
        }
    }, []);
    console.log(items)
    
    return (
        <>
            <div className=" h-[100vh] bg-no-repeat bg-cover w-[100%] bg-[url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgIBwcHBwoICAcHBwoHBwcHCA8ICQcKIBEWIhURExMYHSggGCYxGx8fITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDw0NEisZFRktNy0uKysrKy03NzcrLS0rKzctLS03KysrLSstKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAbAAEBAQEBAQEBAAAAAAAAAAAAAQIDBAUHBv/EABcQAQEBAQAAAAAAAAAAAAAAAAABEQL/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBAUG/8QAGxEBAQEBAQEBAQAAAAAAAAAAABEBAgMxEiH/2gAMAwEAAhEDEQA/AP2oB8ZsAAANBAc91QBkGOo6JY684V5+o59R6Oo5dR6eMdedcOox1HbqMWPXxy65rhYzY62M2PVxy6ZrlYzY63lmx6eeW81ysZsdbEsdsazXKxMdMSxqtVzxMdMTFrVYxMbxMKtQXFEQXFBFFREFAr+iAfkXyAAAEY3VAGfoKDpzyCmK7c8ox1HLqPRZrHXD08crnTzdcud5eq8MXl7OOXXOnmvLN5ei8sXl6Of46Z0895Zsd7yxY6ZredONjNjtYzY3mt5rjiWOtjNi1rNc8THTExqtVzxMdMTFq1zwxvExatQXDAqKuCIirgD74D8k+UAM7qoAx9BRXTnkFkJFejnhkXCRqR6OPNKki4o9GcxHPrlz65ehm8uma1mvL1y53l6euWOuW86dM6ea8sXl6LyxeXTNdM6cLGbHaxm8t5rpnThYljrYzY1mt5rlYmOtjNjVazXPExuxMWrWMTG8TFrVYwxvExatZVcMCoNIiV91AflNfMBFc9UUix044SmLIsWR6uPNKSLIsivVz5xlMUHUAAAASxz65dUsXNXNefrli8vT1y59ct5redPPeWLy73li8t5rpnThYzY73li8t5rpmuNjNjtYzY1mtZrlYzY62JY1W65WJjpYmLVrnhjeJi1axhjeJi1ayNYFK+uIPyevm1ViSNSOnHnUqxZCRp7fPyZ3SRpB6c5zEqiDRVE00KoAUVAWqIIVWbyoLXPrlzvL0WaxeWs1rOnnvLF5ei8sWN5rpnTheWbHa8s2N5rea42M2OtiWNZrea42JjrYzY1Wq54mOmJi1queGN4mLVrGKuBSvpLIkjcj855+W6+bukjUhIr6HHlmfWN1RB2SqIKVRAKogFURQoALVNQQq6agFa0ZBaWMWNitZ042M2O1jFjWa3nbjYzY7WMWNZrpnTlYljrYzY1XTOnLEsdLEsarWa54mOmJi1a54N4LVr3yNSA8XHnnL5e6og2lUQCqIBVEAqiClUQCqIBVEEKogFUQCqrJotaZsNXQrFjFjqzY1mt525WM2OtjNjWa6Z252JjdiWLXTO2MZxvExqt50ziNgv6ewQcXzlEBKqAFAAoAFBASqIBVE0CqJpoVRNNCqJpoVRNNCqIC1VZAq4zYqi5052M2OtjNjWa3nbliY6WM2NVvO2MGsUa/buCObyqgKlBAKogFVAEAAAQKogJVEAqiAVRAKogFUQCqIBVEAqiAtWxmxQXOmcGhav7aEEQAEBASqgKAAgIBVEBKoiBVEAq6agJV01AKogFUQCqIBVNQCrpqAVdNQCrogFbBEdABUAQSggJVEBABQBBKogFUQEoBoUEAqiAlUQCqagpV01ECtaagFXRAKogFdAGXUQA0QBkAUEAQAEBARUAAAQAUAAQUEQAAAAAQAAAAAFf/2Q==')]" >
                <Navbar />
                <div className='flex  flex-col justify-center gap-[30px] p-[2rem] m-auto items-center bg-white w-[fit-content]'>
       
                 <h1>Email is {items.email}</h1>
                <h1>Phone  is {items.phone}</h1>
                    <h1>Passwd is {items.passwd}</h1>
                    </div>
            </div>
        </>
        )
}

export default Dashboard