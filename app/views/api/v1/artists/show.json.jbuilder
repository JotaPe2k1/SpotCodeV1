json.id @artist.id
json.name @artist.name
json.photo_url url_for(@artist.photo)
json.photo_url url_for(@artist.photo)
json.albums @artist.albums.each do |album|
    json.title album.title
end

