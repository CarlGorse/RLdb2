
class Json {

	getPlayersJson () {
		
		var playersJSON = '';
		var CRLF = '\r\n';	
		
		
		var padLine = function (line, position) {
			for (var l = line.length; l <= position-1; l++)
			{
				line += ' ';
			}
			return line;	
		}

		var tab = function (count) {	
			return ' '.repeat(count * 8); 
		}

		var clubsJSON = '';
		clubsJSON += '{"clubs":';
		clubsJSON += CRLF;
		clubsJSON += tab(1);
		clubsJSON += '[';
		clubsJSON += CRLF;
		playersJSON += clubsJSON;
			
		data.clubs.items.forEach(
			
			function (c)
			{
					
				var cp = c.clubPlayers()
				if (cp.items.length > 0)
				{    
					var clubJSON = '';
					clubJSON += tab(2);
					clubJSON += '{';
					clubJSON += '\"';
					clubJSON += 'clubId';
					clubJSON += '\":\"';
					clubJSON += c.clubId;
					clubJSON += '\"';
					clubJSON += ',';
					clubJSON += '\"players\":';
					clubJSON += CRLF;
					clubJSON += tab(3);
					clubJSON += '[';
					clubJSON += CRLF;
					playersJSON += clubJSON;
						
					cp.items.forEach(
						function (p)
						{
								
							var playerJSON = '';
								
							playerJSON += tab(4);
							playerJSON += '{';
							playerJSON += '\"' + 'forename' + '\"' + ':' + '\"' + p.forename + '\"';
							playerJSON += ', '
							playerJSON = padLine(playerJSON, 72);
							playerJSON += '\"' + 'surname' + '\"' + ':' + '\"' + p.surname + '\"';
								
							if (p.positionId)
							{
								playerJSON += ', '
								playerJSON = padLine(playerJSON, 110);
								playerJSON += '\"' + 'positionId' + '\"' + ':' + '\"' + p.positionId + '\"';
							}
								
							if (p.squadNo)
							{
								playerJSON += ', '					
								playerJSON = padLine(playerJSON, 148);
								playerJSON += '\"' + 'squadNo' + '\"' + ':' + '\"' + p.squadNo + '\"';
							}
								
							if (p.image)
							{
								playerJSON += ', '
								playerJSON = padLine(playerJSON, 186);
								playerJSON += '\"' + 'image' + '\"' + ':' + '\"' + p.image + '\"';
							}
								
							playerJSON += '}';
							playerJSON += ',';
							playerJSON += CRLF;
								
							playersJSON += playerJSON;
								
						}
					)

					if (playersJSON.substring(playersJSON.length-CRLF.length-1, playersJSON.length-CRLF.length) == ",")
					{
						playersJSON = playersJSON.substring(0, playersJSON.length-CRLF.length-1);
					}

					clubJSON = '';
					clubJSON += CRLF;
					clubJSON += tab(3);
					clubJSON += ']';
					clubJSON += CRLF;
					clubJSON += tab(2);
					clubJSON += '}';
					clubJSON += ',';
					clubJSON += CRLF;
					clubJSON += CRLF;
					playersJSON += clubJSON;
						
				}

			}
		)
			
		if (playersJSON.substring(playersJSON.length-2*(CRLF.length)-1, playersJSON.length-2*(CRLF.length)) == ",")
		{
			playersJSON = playersJSON.substring(0, playersJSON.length-2*(CRLF.length)-1);
		}
			
		clubsJSON = '';
			
		clubsJSON += CRLF;;
			
		playersJSON += clubsJSON;
		clubsJSON = '';
		clubsJSON = padLine(clubsJSON, 8);
			
		clubsJSON += ']';
		clubsJSON += CRLF;
		clubsJSON += '}';

		playersJSON += clubsJSON;

		return playersJSON;
		
	}

}