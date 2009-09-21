require 'sinatra'
require 'haml'

require 'cloudkit'
require 'rufus/tokyo'

class Contacts < Sinatra::Default
	#use CloudKit.setup_storage_adapter(Rufus::Tokyo::Table.new('contactz.tdb'))
	use Rack::Session::Pool
  use CloudKit::Service, :collections => [:contacts]

  get '/' do
    haml :index
  end
end
