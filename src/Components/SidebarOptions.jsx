import styled from "styled-components";

const SidebarOptions = ({icon , text , active}) => {

    const Container = styled.div`
        padding: 1.5rem;
        display: flex;
        gap: 7px;
        font-weight: 500;
        font-size: 20px;
        align-items: center;
        // border-radius: 10px;
        // border: 1px solid red;

        :hover {
            background: linear-gradient(90deg, rgba(122,158,239,1) 0%, rgba(187,75,164,1) 36%, rgba(244,149,251,1) 66%);
            font-weight: 800;
        }

        .sidebarmenu--active {
            background: linear-gradient(90deg, rgba(122,158,239,1) 0%, rgba(187,75,164,1) 36%, rgba(244,149,251,1) 66%);;
        }
    `

    return ( 
        <Container className={`${active && "sidebarmenu--active"}`}>
            <i className={icon}></i>
            <p>{text}</p>
        </Container>
     );
}
 
export default SidebarOptions;