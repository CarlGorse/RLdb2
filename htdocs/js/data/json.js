
function Json()
{	
}

Json.prototype.getPlayersJSON = function () {

	var playersJSON = '';
		
	var clubsJSON = '';
	clubsJSON += '{"clubs":';
	clubsJSON += '\r\n';
		
	playersJSON += clubsJSON;
	clubsJSON = "";
	clubsJSON = padLine(clubsJSON, 8);
		
	clubsJSON += '[';
	clubsJSON += '\r\n';
		
	playersJSON += clubsJSON;
		
	data.clubs.items.forEach(
		
		function (c)
		{
				
			var cp = c.clubPlayers()
			if (cp.items.length > 0)
			{    
				var clubJSON = '';
					
				playersJSON += clubJSON;
				clubJSON = '';
				clubJSON = padLine(clubJSON, 16);
					
				clubJSON += '{';
				clubJSON += '\"';
				clubJSON += 'clubId';
				clubJSON += '\":\"';
				clubJSON += c.clubId;
				clubJSON += '\"';
				clubJSON += ',';
				clubJSON += '\"players\":';
				clubJSON += '\r\n';
					
				playersJSON += clubJSON;
				clubJSON = '';
				clubJSON = padLine(clubJSON, 24);
					
				clubJSON += '[';
				clubJSON += '\r\n';
					
				playersJSON += clubJSON;
					
				cp.items.forEach(
					function (p)
					{
							
						var playerJSON = '';
							
						playersJSON += playerJSON;
						playerJSON = '';
						playerJSON = padLine(playerJSON, 32);
							
						playerJSON += '{';
						playerJSON += '\"' + 'name' + '\"' + ':' + '\"' + p.name + '\"';
							
						if (p.positionId)
						{
							playerJSON += ', '
							playerJSON = padLine(playerJSON, 72);
							playerJSON += '\"' + 'positions' + '\"' + ':' + '[' + '\"' + p.positionId + '\"' + ']'
						}
							
						if (p.squadNo)
						{
							playerJSON += ', '					
							playerJSON = padLine(playerJSON, 104);
							playerJSON += '\"' + 'squadNo' + '\"' + ':' + '\"' + p.squadNo + '\"';
						}
							
						if (p.img)
						{
							playerJSON += ', '
							playerJSON = padLine(playerJSON, 128);
							playerJSON += '\"' + 'img' + '\"' + ':' + '\"' + p.img + '\"';
						}
							
						playerJSON += '}';
						playerJSON += ',';
						playerJSON += '\r\n';
							
						playersJSON += playerJSON;
							
					}
				)

				if (playersJSON.substring(playersJSON.length-'\r\n'.length-1, playersJSON.length-'\r\n'.length) == ",")
				{
					playersJSON = playersJSON.substring(0, playersJSON.length-'\r\n'.length-1);
				}

				clubJSON = '';
				clubJSON += '\r\n';
					
				playersJSON += clubJSON;
				clubJSON = '';
				clubJSON = padLine(clubJSON, 24);
						
				clubJSON += ']';
				clubJSON += '\r\n';
					
				playersJSON += clubJSON;
				clubJSON = '';
				clubJSON = padLine(clubJSON, 16);
					
				clubJSON += '}';
				clubJSON += ',';
				clubJSON += '\r\n';
				clubJSON += '\r\n';
					
				playersJSON += clubJSON;
					
			}

		}
	)
		
	if (playersJSON.substring(playersJSON.length-2*('\r\n'.length)-1, playersJSON.length-2*('\r\n'.length)) == ",")
	{
		playersJSON = playersJSON.substring(0, playersJSON.length-2*('\r\n'.length)-1);
	}
		
	clubsJSON = '';
		
	clubsJSON += '\r\n';
		
	playersJSON += clubsJSON;
	clubsJSON = '';
	clubsJSON = padLine(clubsJSON, 8);
		
	clubsJSON += ']';
	clubsJSON += '\r\n';
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
	
}