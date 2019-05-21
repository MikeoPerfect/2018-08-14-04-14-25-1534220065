module.exports = function main() {
    console.log("Debug Info");
    return 'Hello World!';
};
module.exports = function main(str) {
    const lcd_dict = {
        "0": ["._.", "|.|", "|_|"],
        "1": ["...", "..|", "..|"],
        "2": ["._.", "._|", "|_."],
        "3": ["._.", "._|", "._|"],
        "4": ["...", "|_|", "..|"],
        "5": ["._.", "|_.", "._|"],
        "6": ["._.", "|_.", "|_|"],
        "7": ["._.", "..|", "..|"],
        "8": ["._.", "|_|", "|_|"],
        "9": ["._.", "|_|", "..|"]
    };

    var nums = str.split('');
    var lcd_buff = [];
    for(var i=0;i<nums.length;i++){
        lcd_buff.push(lcd_dict[nums[i]]);
    }

    var output = '';
    for(var i=0;i<3;i++){
        var output_buff=[];
        for(var j=0;j<nums.length;j++){
            output_buff.push(lcd_buff[j][i]);
        }
        output_buff = output_buff.join(' ');
        output = output+output_buff+'\n';
    }

    return output;
};