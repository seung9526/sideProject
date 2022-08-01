import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
        <form action="#" className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display: "none"}} />
                <input type="text" placeholder="제목" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="내용을 입력하세요" type="text" className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit">올리기</button>
        </form>
        </div>
  )
}
