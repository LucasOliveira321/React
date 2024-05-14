function Lista({ itens }){
    return(
        <>
            <h3>Coisas boas</h3>
            {
                itens.length > 0 ? (
                    itens.map((item) => (
                        <p key={item}>{item}</p>
                    ))
                ) : (
                    <p>Não tem itens na lista</p>
                )
                
            }
        </>
    )
}

export default Lista