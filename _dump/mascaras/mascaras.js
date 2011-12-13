
/**
 * Exemplo de uso (javascript obstrutivo):
 * <input type="text" name="" maxlength="14" onkeypress="maskCpf(this)"/>
 */
function maskCpf(i){
    r=i.value;
    r=r.replace(/\D/g,"");
    r=r.replace(/(\d{3})(\d)/,"$1.$2");
    r=r.replace(/(\d{3})(\d)/,"$1.$2");
    r=r.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
    document.getElementById(i.id).value = r;
    //console.log(i.id);
    return i;
}
/**
 * Exemplo de uso (javascript obstrutivo):
 * <input type="text" name="cpf" id="cpf" maxlength="14" onkeypress="maskTelefone(this)"/>
 */
function maskTelefone(i){
    r=i.value;
    r=r.replace(/\D/g,"") ;
    r=r.replace(/^(\d\d)(\d)/g,"($1) $2");
    r=r.replace(/(\d{4})(\d)/,"$1-$2");
    document.getElementById(i.id).value = r;
    return i;
}