//this is a hook for the squere, it should change its color to red an dont let pur a new piece (queen)
export default function onAttackQueen(isAttacked) {
    if(isAttacked){
        return "red"
    }
    
}