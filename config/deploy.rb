# config valid for current version and patch releases of Capistrano
lock "~> 3.10.0"


set :application, "moneymatters.graphics"
# set :repository, "kenstclair@23.239.8.185:/home/git/moneymatters.graphics.git"  #/home/git/moneymatters.graphics.git #ssh://git@23.239.8.185/~/moneymatters.graphics.git
set :repo_url, "kenstclair@23.239.8.185:/home/git/moneymatters.graphics.git"
set :ssh_options, { :forward_agent => true }
# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, "/home/kenstclair/public/moneymatters.graphics"

namespace :deploy do
  desc "cause Passenger to initiate a restart" 
  task :restart do
    run "touch #{current_path}/tmp/restart.txt" 
  end
end

# after :publishing, :restart

#####################
# set :application, 'juggl.me'
# set :repo_url, 'kenstclair@23.239.8.185:/home/git/juggl.me.git'

# Default branch is :master
# ask :branch, proc { `git rev-parse --abbrev-ref HEAD`.chomp }

# Default deploy_to directory is /var/www/my_app
# set :deploy_to, '/home/kenstclair/public/juggl.me'


# Default value for :scm is :git
# set :scm, :git

# Default value for :format is :pretty
# set :format, :pretty


#####################
# namespace :deploy do

#   desc 'Restart application'
#   task :restart do
#     invoke 'pm2:restart'
#   end

#   after :publishing, :restart   
# end

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# append :linked_files, "config/database.yml", "config/secrets.yml"

# Default value for linked_dirs is []
# append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system"

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for local_user is ENV['USER']
# set :local_user, -> { `git config user.name`.chomp }

# Default value for keep_releases is 5
# set :keep_releases, 5

# Uncomment the following to require manually verifying the host key before first deploy.
# set :ssh_options, verify_host_key: :secure


#################### //Agile Railes Development 4 book

#set :git_user, 'git'
#set :user, 'kenstclair'
#set :domain, '23.239.8.185' 
#set :application, 'moneymatters.graphics'

# file paths
#set :repository, "#{git_user}@#{domain}:~/#{application}.git"  #/home/git/moneymatters.graphics.git #ssh://git@23.239.8.185/~/moneymatters.graphics.git
#set :deploy_to, "/home/#{user}/public/#{application}" #/home/kenstclair/public/moneymatters.graphics

# distribute your applications across servers (the instructions below put them # all on the same server, defined above as 'domain', adjust as necessary)
#role :app, domain
#role :web, domain
#role :db, domain, :primary => true

# you might need to set this if you aren't seeing password prompts
# default_run_options[:pty] = true
# As Capistrano executes in a non-interactive mode and therefore doesn't cause
# any of your shell profile scripts to be run, the following might be needed
# if (for example) you have locally installed gems or applications.  Note:
# this needs to contain the full values for the variables set, not simply
# the deltas.
# default_environment['PATH']='<your paths>:/usr/local/bin:/usr/bin:/bin'
# default_environment['GEM_PATH']='<your paths>:/usr/lib/ruby/gems/1.8'
# miscellaneous options
#set :deploy_via, :remote_cache 

# set :scm_verbose, true
# set :use_sudo, false
#set :normalize_asset_timestamps, false
#set :rails_env, :production

# namespace :deploy do
#   desc "cause Passenger to initiate a restart" 
#   task :restart do
#     run "touch #{current_path}/tmp/restart.txt" 
#   end
# #  desc "reload the database with seed data" 
# #  task :seed do
# ##    deploy.migrations
# #	run "cd #{current_path}; rake db:seed RAILS_ENV=#{rails_env}" 
# #  end
# end

###################
