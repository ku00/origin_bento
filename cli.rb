#!/usr/bin/env ruby
 
require 'thor'
require 'open3'
 
class Order < Thor
	default_command :git_pull

	desc "git_pull", ""
	def git_pull
		puts "sorry... Failed to order origin-bento. (´･_･`) "
	end

    desc "origin_bento", "Order origin_bento by casperjs"
    def origin_bento
        Open3.capture3("casperjs order.js")
        puts "Completed the order!"
    end
end
 
Order.start(ARGV)
