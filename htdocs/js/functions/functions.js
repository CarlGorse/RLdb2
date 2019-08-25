
class Functions {

    getCountDescription (count, description) {
        var result = count;
        result += ' ';
        result += description;
        if (count != 1) result += "s";
        return result;    
    }

}