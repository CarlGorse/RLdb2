
function Json() {}

Json.prototype.getPlayersJSON = function () {

	var playersJSON = '';
	var CRLF = '\r\n';	
	
	var clubsJSON = '';
	clubsJSON += '{"clubs":';
	clubsJSON += this.CRLF;
	clubsJSON += this.tab(1);
	clubsJSON += '[';
	clubsJSON += this.CRLF;
	playersJSON += clubsJSON;
		
	data.clubs.items.forEach(
		
		function (c)
		{
				
			var cp = c.clubPlayers()
			if (cp.items.length > 0)
			{    
				var clubJSON = '';
				clubJSON += this.tab(2);
				clubJSON += '{';
				clubJSON += '\"';
				clubJSON += 'clubId';
				clubJSON += '\":\"';
				clubJSON += c.clubId;
				clubJSON += '\"';
				clubJSON += ',';
				clubJSON += '\"players\":';
				clubJSON += this.CRLF;
				clubJSON += this.tab(3);
				clubJSON += '[';
				clubJSON += this.CRLF;
				playersJSON += clubJSON;
					
				cp.items.forEach(
					function (p)
					{
							
						var playerJSON = '';
							
						playerJSON += this.tab(4);
						playerJSON += '{';
						playerJSON += '\"' + 'name' + '\"' + ':' + '\"' + p.name + '\"';
							
						if (p.positionId)
						{
							playerJSON += ', '
							playerJSON = padLine(playerJSON, 72);
							playerJSON += '\"' + 'positionId' + '\"' + ':' + '\"' + p.positionId + '\"';
						}
							
						if (p.squadNo)
						{
							playerJSON += ', '					
							playerJSON = padLine(playerJSON, 104);
							playerJSON += '\"' + 'squadNo' + '\"' + ':' + '\"' + p.squadNo + '\"';
						}
							
						if (p.image)
						{
							playerJSON += ', '
							playerJSON = padLine(playerJSON, 128);
							playerJSON += '\"' + 'image' + '\"' + ':' + '\"' + p.image + '\"';
						}
							
						playerJSON += '}';
						playerJSON += ',';
						playerJSON += this.CRLF;
							
						playersJSON += playerJSON;
							
					}
				)

				if (playersJSON.substring(playersJSON.length-this.CRLF;.length-1, playersJSON.length-this.CRLF;.length) == ",")
				{
					playersJSON = playersJSON.substring(0, playersJSON.length-this.CRLF;.length-1);
				}

				clubJSON = '';
				clubJSON += this.CRLF;
				clubJSON += this.tab(3);
				clubJSON += ']';
				clubJSON += this.CRLF;
				clubJSON += this.tab(2);
				clubJSON += '}';
				clubJSON += ',';
				clubJSON += this.CRLF;
				clubJSON += this.CRLF;
				playersJSON += clubJSON;
					
			}

		}
	)
		
	if (playersJSON.substring(playersJSON.length-2*(this.CRLF;.length)-1, playersJSON.length-2*(this.CRLF;.length)) == ",")
	{
		playersJSON = playersJSON.substring(0, playersJSON.length-2*(this.CRLF;.length)-1);
	}
		
	clubsJSON = '';
		
	clubsJSON += this.CRLF;;
		
	playersJSON += clubsJSON;
	clubsJSON = '';
	clubsJSON = padLine(clubsJSON, 8);
		
	clubsJSON += ']';
	clubsJSON += this.CRLF;
	clubsJSON += '}';

	playersJSON += clubsJSON;

	return playersJSON;
	
	function padLine(line, position) {
		for (var l = line.length; l <= position-1; l++)
		{
			line += ' ';
		}
		return line;	
	}
	
	function tab(count) { return ' '.repeat(count * 8); }
	
}